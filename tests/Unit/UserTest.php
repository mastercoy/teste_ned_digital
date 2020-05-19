<?php /** @noinspection PhpUndefinedMethodInspection */

namespace Tests\Unit;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserTest extends TestCase {

    use RefreshDatabase;

    //               $this->withoutExceptionHandling();

    /** @test */
    public function retorna_todos_usuarios() {
        //
        factory(User::class, 5)->create();
        $this->assertCount(5, User::all());
        $response = $this->get('/user_json');
        $response->assertJsonCount(5);
    }

    /** @test */
    public function user_pode_ser_adicionado() {
        //
        $this->post('/user_json', [
            'name' => 'User Teste',
            'email' => 'teste@mail.com',
            'cpf' => '1234567890',
            'phone' => '1234567890'
        ]);

        $this->assertCount(1, User::all());
    }

    /** @test */
    public function campos_sao_obrigatorios() {
        //
        $response = $this->post('/user_json', [
            'name' => '',
            'email' => '',
            'cpf' => '',
            'phone' => ''
        ]);

        $response->assertSessionHasErrors('name');
        $response->assertSessionHasErrors('email');
        $response->assertSessionHasErrors('cpf');
        $response->assertSessionDoesntHaveErrors('phone');

    }

    /** @test */
    public function user_pode_ser_atualizado() {
        //
        factory(User::class, 1)->create();
        // $this->assertCount(1, User::all());
        $user = User::first();

        $this->patch('/user_json/' . $user->id, [
            'name' => 'novo nome',
            'email' => $user->email,
            'cpf' => $user->cpf,
        ]);

        $this->assertEquals('novo nome', User::first()->name);
    }

    /** @test */
    public function usuario_pode_ser_deletado() {
        //
        factory(User::class, 1)->create();
        $this->assertCount(1, User::all());
        $user = User::first();
        $this->delete('user_json/' . $user->id);
        $this->assertCount(0, User::all());

    }
}
