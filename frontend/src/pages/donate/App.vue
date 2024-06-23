<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <button class="back-button" @click="goBack">Voltar</button>
    <div class="container">
        <h2>Login / Registro</h2>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" v-model="email" id="email" placeholder="Digite seu email">
        </div>
        <div class="form-group">
            <label for="senha">Senha</label>
            <input type="password" v-model="senha" id="senha" placeholder="Digite sua senha">
        </div>
        <p><a href="#">Esqueceu sua senha?</a></p>

        <h2>Faça sua Doação</h2>
        <div class="form-group">
            <label for="valor">R$</label>
            <input type="number" v-model="valor" id="valor" placeholder="Digite o valor">
            <button @click="Donate()">Doar</button>
        </div>
        <div class="buttons">
            <button @click="handleClick(10)">R$10,00</button>
            <button @click="handleClick(100)">R$100,00</button>
            <button @click="handleClick(1000)">R$1.000,00</button>
        </div>

        <h2>Está em dúvida de quanto doar?</h2>
        <table>
            <thead>
                <tr>
                    <th>Remédios Usados</th>
                    <th>Média do Valor</th>
                    <th>Quantidade de Uso Mensal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(remedio, index) in remedios" :key="index">
                    <td>{{ remedio.nome }}</td>
                    <td>{{ remedio.valor }}</td>
                    <td>{{ remedio.quantidade }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            senha: '',
            valor: '',
            remedios: [
                { nome: 'Paracetamol', valor: 'R$10,00', quantidade: 30 },
                { nome: 'Dipirona', valor: 'R$12,00', quantidade: 20 },
                { nome: 'Ibuprofeno', valor: 'R$15,00', quantidade: 25 }
            ]
        };
    },
    methods: {
        handleClick(button) {
            document.getElementById("valor").value = button
        },
        Donate() {
            window.location.href = '/obrigado';
        },
        goBack() {
            window.history.back();
        }
    }
};
</script>

<style>
* {
    color: #e3e0e0;
    background-color: #121212;
    font-family: 'Arial', sans-serif;
}

h2 {
    background-color: #1e1e1e;
}

label {
    background-color: #1e1e1e;
}

a {
    background-color: #1e1e1e;
}

p {
    background-color: #1e1e1e;
}

div.buttons {
    background-color: #1e1e1e;
}

.form-group {
    background-color: #1e1e1e;
}
</style>

<style scoped>
body {
    margin: 0;
    padding: 20px;
    background-color: #121212;
    color: #ffffff;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #1e1e1e;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    position: relative;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
}

.form-group input[type="email"],
.form-group input[type="password"] {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 10px;
    border: none;
    background-color: #2c2c2c;
    color: #ffffff;
}

.form-group input[type="number"] {
    width: 50%;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 10px;
    border: none;
    background-color: #2c2c2c;
    color: #ffffff;
}

.form-group input[type="email"]::placeholder,
.form-group input[type="password"]::placeholder,
.form-group input[type="number"]::placeholder {
    color: #bbbbbb;
}

.form-group button {
    margin-left: 20px;
    display: inline-block;
    padding: 10px 20px;
    background-color: #2382e0;
    color: white;
    text-decoration: none;
    border-radius: 25px;
    transition: background-color 0.3s, transform 0.3s;
}

.form-group button:hover {
    background-color: #2382e0;
    transform: scale(1.05);
}

.form-group button:active {
    background-color: #316eaf;
    transform: scale(0.95);
}


.buttons {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
}

.buttons button {
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    background-color: #4a90e2;
    color: #ffffff;
    font-size: 16px;
}

.buttons button:hover {
    background-color: #357abd;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    background-color: #1e1e1e;
    border-radius: 10px;
    overflow: hidden;
}

table th,
table td {
    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #333333;
}

table th {
    background-color: #2c2c2c;
}

table tr:last-child td {
    border-bottom: none;
}

p a {
    color: #4a90e2;
    text-decoration: none;
    background-color: #1e1e1e;
}

p a:hover {
    text-decoration: underline;
}

.back-button {
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 10px 20px;
    background-color: #4a90e2;
    color: #ffffff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
}

.back-button:hover {
    background-color: #357abd;
}
</style>
