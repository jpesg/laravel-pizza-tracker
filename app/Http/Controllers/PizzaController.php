<?php

namespace App\Http\Controllers;

use App\Models\Pizza;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PizzaController extends Controller
{
    public function index(): \Inertia\Response
    {
        $pizzas = Pizza::all();
        return Inertia::render('Pizzas/All', compact('pizzas'));
    }

    public function edit(Pizza $pizza): \Inertia\Response
    {
        return Inertia::render('Pizzas/Edit', compact('pizza'));
    }
    public function update(Pizza $pizza, Request $request): void
    {
       $pizza->update([
           'status' => $request->status
       ]);

    }
}
