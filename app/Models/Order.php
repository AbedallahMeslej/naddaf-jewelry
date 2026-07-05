<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'order_number',
        'first_name',
        'last_name',
        'phone',
        'address',
        'address2',
        'note',
        'items',
        'total',
        'delivery',
        'status',
    ];
}