<!-- =========================================================================================
    File Name: TablePagination.vue
    Description: Add pagination to table for long data
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Desk Review" code-toggler>
        
        <vs-alert color="warning" icon="new_releases" active="true" class="my-3">
            <p>View Proposal</p>
        </vs-alert><br>

        <vs-table max-items="5" pagination :data="viewdeskreviews">

            <template slot="thead">
                <vs-th>No. </vs-th>
                <vs-th>Id Proposal</vs-th>
                <vs-th>Tanggal Surat Mohon</vs-th>
                <vs-th>Id Koperasi</vs-th>
                <vs-th>Nama Mitra</vs-th>
                <vs-th>Alamat</vs-th>
                <vs-th>Skim</vs-th>
                <vs-th>Statius</vs-th>
                <vs-th>Action</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">

                    <!-- <vs-td>
                        {{ indextr + 1 }}
                    </vs-td>

                    <vs-td :data="data[indextr].email">
                        {{data[indextr].email}}
                    </vs-td>

                    <vs-td :data="data[indextr].username">
                        {{data[indextr].username}}
                    </vs-td>

                    <vs-td :data="data[indextr].id">
                        {{data[indextr].website}}
                    </vs-td>

                    <vs-td :data="data[indextr].id">
                        {{data[indextr].id}}
                    </vs-td>

                    <vs-td :data="data[indextr].username">
                        {{data[indextr].username}}
                    </vs-td>

                    <vs-td :data="data[indextr].username">
                        {{data[indextr].username}}
                    </vs-td>

                    <vs-td :data="data[indextr].id">
                        {{data[indextr].website}}
                    </vs-td>

                    <vs-td :data="data[indextr].id">
                        {{data[indextr].id}}
                    </vs-td>

                    <vs-td>
                        <vs-button>View</vs-button>
                    </vs-td> -->

                    <vs-td>
                        {{ indextr + 1 }}
                    </vs-td>

                    <vs-td :data="data[indextr].idProposal">
                        {{data[indextr].idProposal}}
                    </vs-td>

                    <vs-td :data="data[indextr].tanggalSuratMohon">
                        {{data[indextr].tanggalSuratMohon}}
                    </vs-td>

                    <vs-td :data="data[indextr].idKoperasil">
                        {{data[indextr].idKoperasil}}
                    </vs-td>

                    <vs-td :data="data[indextr].namaMitra">
                        {{data[indextr].namaMitra}}
                    </vs-td>

                    <vs-td :data="data[indextr].alamat">
                        {{data[indextr].alamat}}
                    </vs-td>

                    <vs-td :data="data[indextr].jenis">
                        {{data[indextr].jenis}}
                    </vs-td>
                    
                    <vs-td :data="data[indextr].stat">
                        {{data[indextr].stat}}
                    </vs-td>
                    
                    <vs-td>
                        <vs-button @click="popupActivo4=true">View</vs-button>
                        <vs-popup fullscreen title="Desk Review" :active.sync="popupActivo4">
                        <p>
                               hilih 
                        </p>
                        </vs-popup>
                    </vs-td>

                </vs-tr>
            </template>

            

        </vs-table>
        
        

    </vx-card>

    
</template>

<script>

import axios from 'axios';

export default {
   
    name: 'app',
    data() {
        return {
        viewdeskreviews: [],
        popupActivo4:false
        }
    },
    async created() {
    try {
      const res = await axios.get(`http://localhost:3000/viewdeskreview`)
    console.log(res)
      this.viewdeskreviews = res.data;
    } catch(e) {
      console.error(e)
    }
    }

    // data: () => ({
      
    //     users: [
          
          
    //         {
    //             "id": 1,
    //             "name": "Kuncoro",
    //             "username": "Kuncoro",
    //             "email": "Sincere@april.biz",
    //             "website": "hildegard.org",
    //         },
    //         {
    //             "id": 2,
    //             "name": "Ervin Howell",
    //             "username": "Antonette",
    //             "email": "Shanna@melissa.tv",
    //             "website": "anastasia.net",
    //         },
    //         {
    //             "id": 3,
    //             "name": "Clementine Bauch",
    //             "username": "Samantha",
    //             "email": "Nathan@yesenia.net",
    //             "website": "ramiro.info",
    //         },
    //         {
    //             "id": 4,
    //             "name": "Patricia Lebsack",
    //             "username": "Karianne",
    //             "email": "Julianne.OConner@kory.org",
    //             "website": "kale.biz",
    //         },
    //         {
    //             "id": 5,
    //             "name": "Chelsey Dietrich",
    //             "username": "Kamren",
    //             "email": "Lucio_Hettinger@annie.ca",
    //             "website": "demarco.info",
    //         },
    //         {
    //             "id": 6,
    //             "name": "Mrs. Dennis Schulist",
    //             "username": "Leopoldo_Corkery",
    //             "email": "Karley_Dach@jasper.info",
    //             "website": "ola.org",
    //         },
    //         {
    //             "id": 7,
    //             "name": "Kurtis Weissnat",
    //             "username": "Elwyn.Skiles",
    //             "email": "Telly.Hoeger@billy.biz",
    //             "website": "elvis.io",
    //         },
    //         {
    //             "id": 8,
    //             "name": "Nicholas Runolfsdottir V",
    //             "username": "Maxime_Nienow",
    //             "email": "Sherwood@rosamond.me",
    //             "website": "jacynthe.com",
    //         },
    //         {
    //             "id": 9,
    //             "name": "Glenna Reichert",
    //             "username": "Delphine",
    //             "email": "Chaim_McDermott@dana.io",
    //             "website": "conrad.com",
    //         },
    //         {
    //             "id": 10,
    //             "name": "Clementina DuBuque",
    //             "username": "Moriah.Stanton",
    //             "email": "Rey.Padberg@karina.biz",
    //             "website": "ambrose.net",
    //         }
            
    //     ]
        
    // }), 

   

}


</script>