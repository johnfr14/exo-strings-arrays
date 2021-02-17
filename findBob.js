let str ='\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

str
  .trim()
  .toLowerCase()
  .split(' ')
  .forEach(function (item, index, array){
    if (item === 'bob') {
      console.log(index, item)
  }
  })