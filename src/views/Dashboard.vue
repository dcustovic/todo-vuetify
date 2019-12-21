<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1> 

      <v-container class="my-12">
        

        <v-row class="ma-1 mb-2">
          
          <v-tooltip top>
            <template v-slot:activator="{ on }">
          <v-btn small text color="gray" @click="sortBy('title')" v-on="on">
            <v-icon left small>mdi-folder</v-icon>
            <span class="caption text-lowercase">by project name</span>
          </v-btn>
          </template>
          <span>Orders projects by A-Z</span>
          </v-tooltip>

          <v-tooltip top>
            <template v-slot:activator="{ on }">
          <v-btn small text color="gray" @click="sortBy('person')" v-on="on">
            <v-icon left small>mdi-account</v-icon>
            <span class="caption text-lowercase">by person</span>
          </v-btn>
          </template>
           <span>Orders people by A-Z</span>
          </v-tooltip>
        </v-row>

         <v-card flat class="pa-3" v-for="project in projects" :key="project.title">
           <v-row :class="`pa-2 project ${project.status}`">
              <v-col xs12 md6>
                  <div class="caption grey--text">Project Title</div>
                  <div>{{ project.title }}</div>
              </v-col>
              <v-col xs6 sm4 md2>
                  <div class="caption grey--text">Person</div>
                  <div>{{ project.person }}</div>
              </v-col>
              <v-col xs6 sm4 md2>
                  <div class="caption grey--text">Due by</div>
                  <div>{{ project.due }}</div>
              </v-col>
              <v-col xs2 sm4 md2>
                  <div class="text-right">
                    <v-chip small :color="`${project.status}`" :class="`v-chip--active white--text caption my-2`">{{project.status}}</v-chip>
                  </div>
              </v-col>              
           </v-row>
           <v-divider></v-divider>
         </v-card>

      </v-container>

      <v-container style="text-align: center" class="my-12">
          <p>All projects are displayed here</p>
      </v-container>

  </div>
</template>


<script>
import db from '@/firebase'

export default {
  data() {
    return {
      projects: []
    }
  },
  methods: {
    sortBy (prop) {
       this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === 'added'){
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  }

}
</script>


<style>
.project.complete {
  border-left: 4px solid rgb(54, 185, 54);
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete{
  background: #34b334;
}
.v-chip.ongoing{
  background: #ffaa2c;
}
.v-chip.overdue{
  background: #f83e70;
}
</style>