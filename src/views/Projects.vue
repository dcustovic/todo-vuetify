<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text">Projects</h1>

  <v-container class="my-5">
  <v-expansion-panels>
    <v-expansion-panel v-for="project in myProjects" :key="project.title">

      <v-expansion-panel-header class="subtile-1">{{project.title}}</v-expansion-panel-header>
      <v-expansion-panel-content >
        <v-card-text>
            <div class="font-weight-bold">{{project.due}}</div>
            <div class="font-italic caption">{{project.content}}</div>
        </v-card-text>
      </v-expansion-panel-content>

    </v-expansion-panel>
  </v-expansion-panels>
  </v-container>



      <v-container style="text-align: center" class="my-12">
          <p>All your projects are displayed here</p>
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
    computed: {
      myProjects () {
        return this.projects.filter(project => {
          return project.person === 'Pospanko'
        })
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
