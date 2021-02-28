<template>
    <div>
        <table v-if="mostrarTabla">
            <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Valor Matricula</th>
                <th>Descuento</th>
            </tr>
            <tr v-for="(persona,index) in alumnos" :key="index">
                <td>{{persona.nombre}}</td>
                <td>{{persona.edad}}</td>
                <td>{{persona.valorMatricula}}</td>
                <td>{{persona.descuento*persona.valorMatricula}}</td>
            </tr>
        </table>

        <button @click="agregarPersona">AGREGAR PERSONA</button>
        <button @click="limpiar">LIMPIAR</button>
    </div>
</template>
<script>
export default {
    name: "Contactenos",
    data() {
        return {
            alumnos: [{
                nombre: "Juan",
                edad: 20,
                valorMatricula: 2500,
                descuento: 0.3
            },{
                nombre: "Pedro",
                edad: 25,
                valorMatricula: 2100,
                descuento: 0.2
            },
            {
                nombre: "Jorge",
                edad: 21,
                valorMatricula: 1050,
                descuento: 0.1
            }],
            mostrarTabla: true 
        }
    },
    methods: {
        agregarPersona(){
            this.mostrarTabla = true;
            this.alumnos.push({
                nombre: "Luis",
                edad: 22,
                valorMatricula: 1020,
                descuento: 0.2
            })
        },
        limpiar(){
            this.alumnos = [];
            this.mostrarTabla = false;
        }
    }
}
</script>