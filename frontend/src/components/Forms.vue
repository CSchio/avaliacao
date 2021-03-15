<template>
  <div class="forms">
    <h1>Avaliação</h1>
    <div class="forms-grid">
      <div class="column">
        <h3>Ordena Lista: </h3>
        <textarea spellcheck="false" class="json" v-model="requestJsonOrdenaLista"></textarea>
        <button type="submit" @click="OrdenaLista">Enviar</button>
        <textarea disabled spellcheck="false" class="response" v-model="responseJsonOrdenaLista"></textarea>
      </div> 
      <div class="column">
        <h3>Interlace: </h3>
        <textarea spellcheck="false" class="json" v-model="requestJsonInterlace"></textarea>
        <button type="submit" @click="Interlace">Enviar</button>
        <textarea disabled spellcheck="false" class="response" v-model="responseJsonInterlace"></textarea>
      </div> 
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import stringify from 'json-stringify-pretty-compact'

export default {
  name: 'Forms',
  data: function() {
    return {
      requestJsonOrdenaLista: `{
        "listas": {
          "salaN": [ 1, 5, 7, 8, 9 ],
          "salaS": [ "a", "x", "n" ]
        }
      }`,
      responseJsonOrdenaLista: "",
      requestJsonInterlace: `{
        "intervaloA": [ 20, 40 ],
        "intervaloB": [ 10, 20 ]
      }`,
      responseJsonInterlace: ""
    }
  },
  methods: {
    OrdenaLista(){
      const ApiUrl = "http://localhost:8080/ordenaLista"
      try {
        const json = JSON.parse(this.requestJsonOrdenaLista)
        axios.post(ApiUrl, json).then( res => {
          this.responseJsonOrdenaLista = stringify(res.data, {maxLength: 40, indent: 2})
        })
        .catch(msg => {this.responseJsonOrdenaLista = msg.response.data})
      }
      catch(msg){
          this.responseJsonOrdenaLista = "Json inválido"
        }
    },
    Interlace(){
      const apiUrl = "http://localhost:8080/interlace"
      try {
        const json = JSON.parse(this.requestJsonInterlace)
        axios.get(apiUrl, {params: json}).then( res => {
          this.responseJsonInterlace = stringify(res.data, {maxLength: 40, indent: 2})
        })
        .catch(msg => {this.responseJsonInterlace = msg.response.data})
      }
      catch(msg){
        this.responseJsonInterlace = "Json inválido"
      }
    },
    prettyPrint() {
      this.requestJsonOrdenaLista = stringify(JSON.parse(this.requestJsonOrdenaLista), {maxLength: 40, indent: 2}) 
      this.requestJsonInterlace = stringify(JSON.parse(this.requestJsonInterlace), {maxLength: 40, indent: 2}) 
    }
  },
  mounted() {
      this.prettyPrint()
    }  
}
</script>

<style scoped>
.forms {
  width: 100vh;
}
h3 {
  color: rgba(255, 255, 255, 0.76);
  margin: 40px 0 20px 0;
  font-weight: 100;
}
h1 {
  color: #42b983;
  font-weight: 100;
}

.forms-grid {
  display: grid;
  grid-template-columns: 50% 50%;
}

.column {
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.json {
  white-space: nowrap;
  resize: vertical;
  font-size: 16px;
  height: 150px;
  border: 1px solid rgba(187, 187, 187, 0.466);
  padding: 3px 8px;
  outline: none;
}

.forms > .forms-grid > .column > button {
  outline: none;
  width: 100px;
  height: 25px;
  margin: 15px;
  border: 1px solid rgba(9, 150, 103, 0.938);
  background-color: #f8f8f800;
  color: rgba(255, 255, 255, 0.76);
}

.forms > .forms-grid > .column > button:active {
  width: 100px;
  height: 25px;
  margin: 15px;
  border: 1px solid rgba(9, 150, 103, 0.938);
  background-color: rgba(9, 150, 103, 0.938);
  color: rgba(255, 255, 255, 0.76);
}

textarea{
  background-color: #f8f8f800;
  color: rgba(255, 255, 255, 0.76);
  max-width: 100%;
  width: 100%;
  border: 0;
}

.response {
  resize: none;
  height: 300px;
}

</style>
