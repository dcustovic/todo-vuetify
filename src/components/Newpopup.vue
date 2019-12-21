<template>
    <v-dialog width="600" v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" v-on="on">Add new project</v-btn>
      </template>

      <v-card>
          <v-card-title>
              <h2>Add new project</h2>
          </v-card-title>

          <v-card-text>   
            <v-form class="px-3" ref="form">
              <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field> <!-- za v-text-field imamo prepend-icon -->
              <v-textarea label="Information" v-model="content" prepend-icon="mdi-tooltip-edit" :rules="inputRules"></v-textarea> <!-- za v-text-area imamo prepend-icon -->
            
            <!-- Calendar -->
                <v-menu min-width="290px">
                  <template v-slot:activator="{ on }">
                      <v-text-field :value="formattedDate" label="Due date" prepend-icon="mdi-calendar-range" v-on="on" :rules="inputRules"></v-text-field>
                  </template>
                  <v-date-picker v-model="due"></v-date-picker>
                </v-menu>
            <!-- Calendar --> 
            </v-form>

            <!-- I accept button -->
                <v-layout justify-center>
                            <v-btn color="primary" outlined @click="submit" :loading="loading">Add Project</v-btn>    
                </v-layout>
            <!-- I accept button -->
          </v-card-text>
      </v-card>
    </v-dialog>
</template>


<script>
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import db from '@/firebase' //@ is root directory

  export default {
    data () {
      return {
        title: '',
        content: '',
        due: null,
        inputRules: [
          v =>  v && v.length >= 3 || 'Minimum length is 3 characters'
        ],
        loading: false,
        dialog: false
      }
    },
    methods: {
        submit() {
          if(this.$refs.form.validate()) {
            this.loading = true;
            const project = {
              title: this.title,
              content: this.content,
              due: format(parseISO(this.due), "do MMM YYY"),
              person: 'Novi pospanko',
              status: 'ongoing'
            }
            db.collection('projects').add(project).then(() => {  //ovo je async, to znaci da vraca promise
              console.log('project added to db')
              this.loading = false;
              this.dialog = false;
            }) 
          }
          this.$emit('projectAdded')
        }
    },
  computed: {
   formattedDate(){
    return this.due ? format(parseISO(this.due), 'do MMM yyyy') : ''
   }
  }
}
</script>