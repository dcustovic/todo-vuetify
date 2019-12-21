<template>
  <div class="team">
    <h1 class="subtitle-1 grey--text">Team</h1>

      <v-container class="my-12">
         
        <v-row wrap>
          <v-col xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
            <v-card outlined class="text-center ma-2">Team Member
              <v-responsive class="pt-4">
                <v-avatar size="75" class="grey lighten-2">
                  <img :src="person.avatar">
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="subheading">{{ person.name }}</div>
                <div class="grey--text">{{ person.role }}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="gray">
                  <v-icon small left>mdi-message-bulleted</v-icon>
                  <span>Message</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

      </v-container>

      <v-container style="text-align: center" class="my-12">
          <p>All members are displayed here</p>
      </v-container>

  </div>
</template>

<script>

export default {
  data() {
    return {
      team: [
        { name: 'Danko', role: 'Web Developer', avatar: '/180678.png'},
        { name: 'Stanko', role: 'Cleaning guy', avatar: '/180679.png'},
        { name: 'Ranko', role: 'Bartender', avatar: '/1626160.png'},
        { name: 'Pospanko', role: 'CEO', avatar: '/image004.png'},
      ]
    }
  }

}
</script>
