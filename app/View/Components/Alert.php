<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;
use DB;

class Alert extends Component
{
    
    
    /**
     * Create a new component instance.
     */
    public function __construct()
    {
        //
        
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        $name = DB::connection('mysql2')
            ->table('tp44')
            ->select('T_ulica')
            ->whereBetween('xdatatime', ['2024-01-01 08:00:00', '2024-02-01 08:00:00'])
            ->AVG('T_ulica');

        return view('components.alert', ['name' => $name]);
    }
}
