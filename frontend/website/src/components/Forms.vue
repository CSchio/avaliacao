<template>
  <div class="forms">
    <h1>Avaliação</h1>
    <div class="forms-grid">
      <div class="column">
        <h3>Ordena Lista: </h3>
        <textarea class="json" name="json"></textarea>
        <button type="submit">Enviar</button>
        <textarea disabled class="response"></textarea>
      </div> 
      <div class="column">
        <h3>Interlace: </h3>
        <textarea class="json" name="json"></textarea>
        <button type="submit">Enviar</button>
        <textarea disabled class="response">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia posuere posuere. Ut eget facilisis neque. Quisque sed quam ultrices, mattis est id, posuere velit. Curabitur quis pellentesque augue. Vestibulum in mattis sem. Phasellus fringilla, quam eget efficitur fringilla, risus mi pellentesque risus, ac scelerisque diam nulla at turpis. Nullam et leo vestibulum, congue nisi nec, pharetra ex. Sed non odio a justo dictum laoreet eget vel lacus. Sed cursus, arcu id ornare sodales, mauris erat imperdiet leo, et euismod sem nisl eu urna. In ultricies magna vel mi dapibus aliquam.
        </textarea>
      </div> 
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Forms'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  overflow: hidden;
  white-space: nowrap;
  resize: vertical;
  background-color: #f8f8f800;
  color: rgba(255, 255, 255, 0.76);
  max-width: 100%;
  width: 100%;
  font-size: 16px;
  height: 150px;
  border: 0;
  border: 1px solid rgba(187, 187, 187, 0.466);
  padding: 3px 8px;
  outline: none;
}

.forms > .forms-grid > .column > button {
  width: 100px;
  height: 25px;
  margin: 15px;
  border: 1px solid rgba(9, 150, 103, 0.938);
  background-color: #f8f8f800;
  color: rgba(255, 255, 255, 0.76);
}

.response {
  background-color: #f8f8f800;
  color: rgba(255, 255, 255, 0.76);
  resize: none;
  max-width: 100%;
  border: 0;
  height: 300px;
  width: 100%;
}

</style>
