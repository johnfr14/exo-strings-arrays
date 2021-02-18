let str ='\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR bob sEcReTeMeNt, MaIs EvE bob vEiLlE bob  \n\n '

str = str.trim()
str = str.toLowerCase()

//console.log(str)

if(str.includes('bob')){
  console.log('bob existe')
} else {
  console.log('bob n\'est pas là')
}


/*
// version non officielle plus élégante
let isExist = str.trim().toLowerCase().includes('bob')
if (isExist) {
  console.log('il existe !')
} else {
  console.log('il n\'existe pas')
}*/