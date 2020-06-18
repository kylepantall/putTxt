<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserContentChunksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_content_chunks', function (Blueprint $table) {
            $table->id();
            $table->text('chunk');

            $table->unsignedBigInteger('content_id')->unsigned();
            $table->foreign('content_id')->references('id')->on('user_content')->cascadeOnDelete();

            $table->integer('chunk_order');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_content_chunks');
    }
}
