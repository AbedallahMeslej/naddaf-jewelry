<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_number')->unique();
            $table->string('first_name');
            $table->string('last_name')->nullable();
            $table->string('phone');
            $table->string('address');
            $table->string('address2')->nullable();
            $table->text('note')->nullable();
            $table->json('items');
            $table->decimal('total', 10, 2);
            $table->decimal('delivery', 10, 2)->default(4);
            $table->enum('status', ['placed', 'preparing', 'out_for_delivery', 'delivered'])->default('placed');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};