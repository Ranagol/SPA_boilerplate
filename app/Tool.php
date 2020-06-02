<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tool extends Model
{
    protected $guarded = ['id'];
    
    public function invoiceitems(){
        return $this->hasMany(Invoice_line::class);
    }
}
