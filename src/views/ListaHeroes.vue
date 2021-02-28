<template>
    <div>
        <div>
        <input type="number" v-model="id">
        </div>
        <div>
        <input type="text" v-model="nombre">
        </div>
        <div>
        <textarea v-model="poderes"></textarea>
        </div>
        <div>
        <input type="text" v-model="foto">
        </div>
        <button @click="guardar">AGREGAR HEROE</button>

        <br/>
        <br/>
        <input type="search" v-model="busqueda">

        <div v-for="(heroe, index) in lista" :key="index">
           Nombre: {{heroe.nombre}}
           <img :src="heroe.foto" width="80" alt="Imagen heroe">     
        </div>
    </div>
</template>
<script>
export default {
    name: "ListaHeroes",
    data(){
        return {
            id: null,
            nombre: "",
            poderes: "",
            foto: "",
            busqueda: "",
            heroes: []
        }
    },
    computed: {
      lista(){
          if(this.busqueda){
              return this.heroes.filter((h)=>h.nombre.includes(this.busqueda));
          }else{
              return this.heroes;
          }
      }
    },
    methods: {
        guardar(){
            if(this.id > 0){
                this.heroes.push({
                    id: this.id,
                    nombre: this.nombre,
                    poderes: this.poderes,
                    foto: this.foto
                })
            }else{
                alert('Hey el id es negativo!');
            }
        }
    }
}
</script>