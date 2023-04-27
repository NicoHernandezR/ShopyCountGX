function cambiarMgrPag(num) {
    let mrg_pg = document.getElementById('mrg_pg')
    if (num === '1'){
      mrg_pg.classList.remove('r_ll_fl')
      mrg_pg.classList.add('r_ll')
      return;
    }
    mrg_pg.classList.add('r_ll_fl')
    mrg_pg.classList.remove('r_ll')
  
  }