<template>
  <div>
    <div class="btn-group" role="group" aria-label="Basic example">
      <div class="mb-12 row"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <form v-on:submit.prevent="updateSemestre(editSemestredata.id)">
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-6">
                    <!-- START Select de usuarios -->
                    <div class="form-group">
                      <label for="category">Usuario</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option value="">Dayaa Tabares</option>
                        <option value="">Kmilo Muñoz</option>
                        <option value="">Lucia</option>
                        <option value="">Hernan &amp; Expert</option>
                      </select>
                    </div>
                  </div>
                  <!-- END usuario -->
                </div>
                <div class="row">
                  <!-- START FORMA DE PAGO -->
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="category">Forma de pago</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option value="">Web Development</option>
                        <option value="">Tech Gadgets</option>
                        <option value="">Business</option>
                        <option value="">Health &amp; Wellness</option>
                      </select>
                    </div>
                  </div>
                  <!-- END FORMA DE PAGO -->
                  <!-- START FECHA DE PAGO -->
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="category">Fecha de pago</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option value="">Web Development</option>
                        <option value="">Tech Gadgets</option>
                        <option value="">Business</option>
                        <option value="">Health &amp; Wellness</option>
                      </select>
                    </div>
                  </div>
                  <!-- END Fecha de pago -->
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="category">Fecha de vencimiento</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option value="">Web Development</option>
                        <option value="">Tech Gadgets</option>
                        <option value="">Business</option>
                        <option value="">Health &amp; Wellness</option>
                      </select>
                    </div>
                    <!-- .form-group -->
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="category">Category</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option value="">Web Development</option>
                        <option value="">Tech Gadgets</option>
                        <option value="">Business</option>
                        <option value="">Health &amp; Wellness</option>
                      </select>
                    </div>
                    <!-- .form-group -->
                  </div>
                  <!-- ID  -->

                  <div class="col-md-12">
                    <br />
                    <br />
                    <label for="Justificacion">Justificacion</label>
                    <textarea
                      class="form-control"
                      id="Re-justificacion"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <br />
                <br />
                <br />
                <div class="row">
                  <div class="col-md-2">
                    <div class="form-group">
                      <label for="category">Productos</label>
                      <select
                        class="form-select"
                        id="produto-value"
                        aria-label="Default select example"
                        @change="seleccionarProducto()"
                      >
                        <option selected value="null">Seleccione...</option>
                        <template v-if="productos.length > 0">
                          <option
                            :value="producto.precio"
                            v-for="(producto, key, index) in productos"
                            :key="index"
                          >
                            {{ producto.nombre }}
                          </option>
                        </template>
                        <template v-else>
                          <option value="null">No hay productospara</option>
                        </template>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <label for="curso_id">Precios</label>
                    <input
                      type="text"
                      class="form-control"
                      name="curso_id"
                      id="curso_id"
                      v-model="precio"
                    />
                  </div>
                  <div class="col-md-2">
                    <label for="curso_id">Cantidad</label>
                    <input
                      type="number"
                      class="form-control"
                      name="curso_id"
                      id="curso_id"
                      v-model="cantidad"
                    />
                  </div>
                  <div class="col-md-2">
                    <label for="curso_id">Descuento</label>
                    <input
                      type="number"
                      class="form-control"
                      name="curso_id"
                      id="curso_id"
                    />
                  </div>
                  <div class="col-md-2">
                    <label for="curso_id">Total</label>
                    <input
                      type="number"
                      class="form-control"
                      name="curso_id"
                      id="curso_id"
                    />
                  </div>
                  <div class="col-md-2">
                    <label for="curso_id">Id Confi</label>
                    <input
                      type="text"
                      class="form-control"
                      name="curso_id"
                      id="curso_id"
                    />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary margin-left"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Agregar producto
                </button>

                <button type="submit" class="btn btn-primary">
                  Guardar cambios
                </button>
              </div>
            </form>

            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-md-6">
                        <label for="curso_id">Producto</label>
                        <input
                          type="text"
                          class="form-control"
                          name="curso_id"
                          id="curso_id"
                            v-model="nuevoNombreProducto"
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="curso_id">Precio</label>
                        <input
                          type="number"
                          class="form-control"
                          name="curso_id"
                          id="curso_id"
                            v-model="nuevoPrecioProducto  "

                        />
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button  @click="agregarProducto()" type="button" class="btn btn-primary">
                      Agregar producto
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- START MODAL -->

    <!-- END MODAL -->
  </div>
</template>

<script>
// import { Producto } from '../models/producto-model'
// import { required, minLength, numeric,between, alpha} from 'vuelidate/lib/validators';
export default {
  name: "Home",
  components: {},
  data() {
    return {
      x: 90,
      y: 10,
      precio: 0,
      cantidad: 0,
      nuevoNombreProducto: "",
      nuevoPrecioProducto: 0,
      productos: [
        {
          nombre: "Camara",
          precio: 345,
        },
        {
          nombre: "Relog",
          precio: 865,
        },
        {
          nombre: "Cama",
          precio: 2455,
        },
        {
          nombre: "Moto",
          precio: 9765,
        },
      ],
      // producto: new Producto()
    };
  },
  computed: {
    suma() {
      return this.x + this.y;
    },
    // calcular(){
    //   return this.precio * this.cantidad
    // },
    // agregarProducto(){

    // }
  },
  methods: {
    seleccionarProducto() {
      this.precio = document.getElementById("produto-value").value;
      console.log(this.precio);
    },
    agregarProducto() {
      console.log('ingreso');
      console.log(this.nuevoPrecioProducto);
      console.log(this.nuevoNombreProducto);

      if (this.nuevoNombreProducto != '' && this.nuevoPrecioProducto > 0) {
        const producto = {
          nombre: this.nuevoNombreProducto,
          precio: this.nuevoPrecioProducto,
        };
        this.productos.push(producto);
        console.log(this.productos);
      }else{
        console.log('no ingresao datos');
      }
    },
  },
};
</script>
