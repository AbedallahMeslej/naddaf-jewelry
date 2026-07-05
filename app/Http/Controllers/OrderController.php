<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $orderNumber = 'NAD-' . rand(1000, 9999);

        $order = Order::create([
            'order_number' => $orderNumber,
            'first_name'   => $request->first_name,
            'last_name'    => $request->last_name,
            'phone'        => $request->phone,
            'address'      => $request->address,
            'address2'     => $request->address2,
            'note'         => $request->note,
            'items'        => json_encode($request->items),
            'total'        => $request->total,
            'delivery'     => $request->delivery ?? 4,
            'status'       => 'placed',
        ]);

        return response()->json([
            'success'      => true,
            'order_number' => $orderNumber,
            'order'        => $order,
        ]);
    }

    public function track($orderNumber)
    {
        $order = Order::where('order_number', $orderNumber)->first();

        if (!$order) {
            return response()->json([
                'success' => false,
                'message' => 'Order not found',
            ], 404);
        }

        return response()->json([
            'success' => true,
            'order'   => [
                'order_number' => $order->order_number,
                'status'       => $order->status,
                'first_name'   => $order->first_name,
                'items'        => json_decode($order->items),
                'total'        => $order->total,
                'delivery'     => $order->delivery,
                'created_at'   => $order->created_at->format('Y-m-d'),
            ],
        ]);
    }

    public function updateStatus(Request $request, $orderNumber)
    {
        $order = Order::where('order_number', $orderNumber)->first();

        if (!$order) {
            return response()->json(['success' => false], 404);
        }

        $order->update(['status' => $request->status]);

        return response()->json(['success' => true, 'order' => $order]);
    }

    public function index()
    {
        $orders = Order::orderBy('created_at', 'desc')->get()->map(function ($order) {
            return [
                'id'           => $order->id,
                'order_number' => $order->order_number,
                'first_name'   => $order->first_name,
                'last_name'    => $order->last_name,
                'phone'        => $order->phone,
                'address'      => $order->address,
                'address2'     => $order->address2,
                'note'         => $order->note,
                'items'        => json_decode($order->items),
                'total'        => $order->total,
                'status'       => $order->status,
                'created_at'   => $order->created_at->format('Y-m-d'),
            ];
        });

        return response()->json(['orders' => $orders]);
    }

    public function destroy($orderNumber)
    {
        $order = Order::where('order_number', $orderNumber)->first();

        if (!$order) {
            return response()->json(['success' => false], 404);
        }

        $order->delete();

        return response()->json(['success' => true]);
    }
}