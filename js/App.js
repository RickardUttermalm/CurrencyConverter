Init();

async function Init(){
    await api.storeData();
    await api.fillDropdowns();   
}