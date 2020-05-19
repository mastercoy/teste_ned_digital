<?php /** @noinspection PhpUnhandledExceptionInspection */

/** @noinspection PhpUndefinedMethodInspection */

namespace App\Http\Controllers;

use App\User;
use Illuminate\Support\Facades\Response;

class UserController extends Controller {


    public function index() {
        //
        $users = User::all();
        return Response::json($users);
    }

    public function store() {
        //
        $user = User::create($this->validateUserRequest());
        return Response::json($user);

    }

    public function show(User $user_json) {
        //
        $user = User::findOrFail($user_json->id);
        return Response::json($user);
    }

    public function update(User $user_json) {
        //
        $user_json->update($this->validateUserRequest());
        return Response::json($user_json);
    }

    public function destroy(User $user_json) {
        //
        $user = $user_json;
        $user_json->delete();
        return 'Usuário ' . $user->name . ' deletado';
    }

    //função de validação
    protected function validateUserRequest() {
        return request()->validate([
                                       'name' => 'required',
                                       'cpf' => 'required',
                                       'phone' => 'nullable',
                                       'email' => 'required'
                                   ]);
    }
}
