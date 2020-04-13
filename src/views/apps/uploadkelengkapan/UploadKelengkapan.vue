<!-- =========================================================================================
    File Name: TabsAlignments.vue
    Description: Align your tabs using alignments prop
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Upload Kelengkapan" code-toggler>

        <div class="mt-5">
            <h6 class="mb-5"></h6>
            <vs-tabs>
                <vs-tab label="Input Pengajuan Proposal Baru">
                    
                    <div class="vx-col w-full mb-base">
                        <vx-card title="Permodalan" code-toggler>
                            <div class="vx-row">
                                <div class="vx-col sm:w-1/3 w-full mb-2">
                                    <vs-input class="w-full" label-placeholder="Setoran Pokok" v-model="input25" />
                                </div>
                                <div class="vx-col sm:w-1/3 w-full mb-2">
                                    <vs-input class="w-full" label-placeholder="Jumlah Pemegang Tahun Akhir" v-model="input26" />
                                </div>
                            </div>
                            <div class="vx-row">
                                <div class="vx-col sm:w-1/3 w-full mb-2">
                                    <vs-input class="w-full" label-placeholder="Simpanan Wajib" v-model="input27" />
                                </div>
                            </div>
                            
                            <!-- <div class="vx-row">
                                <div class="vx-col w-full">
                                    <vs-button color="primary" type="filled">Save</vs-button>
                                </div>
                            </div> -->
                        
                        <div  class="vx-row mb-6">

                            <div class="vx-col sm:w-1/3 w-full">
                                <span><b>Modal Penyertaan :</b></span>
                            </div>

                            <div class="vx-col sm:w-1/3 w-full">

                                    <ul class="centerx">
                                        <li>
                                            <vs-radio v-model="radios1" vs-value="1">Ada</vs-radio>
                                        </li>

                                        <li>
                                            <vs-radio v-model="radios1" vs-value="0">Tidak Ada</vs-radio>
                                        </li>

                                    </ul>
                            </div>

                            <div class="vx-col">
                                        <vs-input class="inputx" v-model="jumlah" placeholder="Jumlah"/>

                            </div>

                        </div>
                            

                        </vx-card>

                    </div>
                </vs-tab>

                <vs-tab label="Permohonan Pinjaman">
                    <div></div>
                </vs-tab>
            </vs-tabs>
        </div>


        
        <vs-table max-items="5">

            <template slot="thead">
                <vs-th>No. </vs-th>
                <vs-th>Nama</vs-th>
                <vs-th>Nominal (Rp)</vs-th>
                <vs-th>Jangka Waktu (Tahun)</vs-th>
                <vs-th>Tanggal Jatuh Tempo</vs-th>
                <vs-th>Bagi Hasil/Bunga</vs-th>
                <vs-th>Status Angsuran/CA</vs-th>
                <vs-th>No Dokumen Perjanjian</vs-th>
                <vs-th>Action</vs-th>
            </template>
        
            <template>
                <vs-tr>

                     <vs-td>
                        
                    </vs-td>

                    <vs-td>
                        
                    </vs-td>

                    <vs-td>
                        
                    </vs-td>

                    <vs-td>
                        
                    </vs-td>

                    <vs-td>
                        
                    </vs-td>

                    <vs-td>
                        
                    </vs-td>

                    <vs-td>
                        
                    </vs-td>
                    
                    <vs-td>
                        
                    </vs-td>
                    
                    <vs-td>
                       
                    </vs-td>

                </vs-tr>
            </template>

        </vs-table>


        <vs-table max-items="5">

            <template slot="thead">
                <vs-th>No. </vs-th>
                <vs-th>Kreditur</vs-th>
                <vs-th>Tahun Cair</vs-th>
                <vs-th>Plafon</vs-th>
                <vs-th>Outs Per(Bulan dan Tahun)</vs-th>
                <vs-th>Jaminan</vs-th>
                <vs-th>Bagi Hasil/Bunga</vs-th>
                <vs-th>Jatuh Tempo(Tahun)</vs-th>
                <vs-th>Action</vs-th>
            </template>
        
            <template>
                <vs-tr>

                     <vs-td>
                        
                    </vs-td>

                    <vs-td>
                        
                    </vs-td>

                    <vs-td>
                        
                    </vs-td>

                    <vs-td>
                        
                    </vs-td>

                    <vs-td>
                        
                    </vs-td>

                    <vs-td>
                        
                    </vs-td>

                    <vs-td>
                        
                    </vs-td>
                    
                    <vs-td>
                        
                    </vs-td>
                    
                    <vs-td>
                       
                    </vs-td>

                </vs-tr>
            </template>

        </vs-table>


    </vx-card>

    

</template>

<script>
export default {
  data(){
    return {
      radios1:"",
      jumlah:""

    }
  }
}
</script>