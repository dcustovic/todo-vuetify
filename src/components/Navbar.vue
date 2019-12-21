<template>
    <nav>


    <v-snackbar v-model="snackbar" bottom color="success" :timeout="4000">
      <span>You added a project.</span>
      <v-btn color="white" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>


        <v-app-bar dark app>
            <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase white--text">
                <span class="font-weight-light">Todo</span>
                <span>Project</span>
            </v-toolbar-title>
            
             <v-spacer />
              <!-- Drop menu  -->
                    <v-menu offset-y>
                     <template v-slot:activator="{ on }">
                        <v-btn text class="dark-gray white--text ma-3" slot="activator" v-on="on">
                            <v-icon>mdi-chevron-down</v-icon>
                            <span>Menu</span>
                        </v-btn>
                     </template>
                        <v-list >
                            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                                <v-list-item-title >{{ link.text }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
            <!-- Drop menu  -->
            <v-btn  color="white" light outlined depressed class="dark-grey" >
            <span>Sign Out</span>
            <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar >



        <v-navigation-drawer temporary app v-model="drawer" class="purple">
            <v-row>
                <v-col style="text-align: center" xs12 class="mt-5">
                    <v-avatar size="120">
                        <img  src="/image004.png">
                    </v-avatar>
                    <p class="white--text subheading mt-1 text-center">Pospanko</p>
                </v-col>
            </v-row>

            <v-col style="text-align: center" class="mb-5">
                <Newpopup @projectAdded="snackbar = true"/>
            </v-col>

            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>


<script>
//import Popup from "./Popup"
import Newpopup from "./Newpopup"

export default {
    components: { Newpopup },
    data() {
        return {
        drawer: false,
        links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
        { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
        { icon: 'mdi-account', text: 'Team', route: '/team' },
        ],
         snackbar: false
        }
    }
}
</script>