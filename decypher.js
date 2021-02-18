let code = "BU RKJ TU SUJ UNUHSYSU UIJ TU LEKI CUJJHU TQDI BQ FUQK T7KD SHOFJQDQBOIJU GKY TULHQ SQIIUH SU SXYVVHUCUDJ SQUIQHBQ C¿JXETU CQDKUBBU UIJ ¿LYTUCUDJ BQ FYHU TU JEKJU UJ D7UIJ FQI KDU IEBKJYED LQBYTU UD LEKI IUHLQDJ TU ZQLQISHYFJ UIIQOUP TU SQIIUH SU SETUKDU YDJUHQSJYED CQDKUBBU UIJ FEIIYRBU BU RKJ D7¿JQDJ FQI TU T¿SXYVVHUH SU SETU TU CQDY¾HU JEJQBUCUDJ QKJECQJYGKU SQH FEKH RYUD BU VQYHU YB LEKI VQKTHQYJ KD TYSJYEDDQYHU TU CEJIED QJJUDT TU LEKI GKU LEKI CYDYCQBYIYUP BUI YDJUHQSJYEDI CQDKUBBUI FEKH T¿SXYVVHUH SU SETU LEKI TULHUP HUDTHU BUI SETUI GKU LEKI QLUP KJYBYI¿ TQDI KD VYSXYUH TUSOFXUHZI UJ USHYHU UD SECCUDJQYHU LEI T¿CQHSXUI UJ BUI TYVV¿HUDJUI ¿JQFUI GKU LEKI QLUP IKYLY FEKH ERJUDYH BU CUIIQWU UD SBQYH XOFEJX¾IUIKDTUVYDUT"


for (let d = 0; d <= 26; d++) {                       // Ok nous avons un déchifrage caesar donc 26 possiblités
  let decypher = ''                                   // on initialise le déchifrage DANS la boucle vu qu'on va devoir y passer 26 fois dessus

  for (let i = 0; i < code.length; i++) {             // ici on va parcourir notre string avec une boucle pour déchifrer 1 à 1 le code 
    let ascii                                          // cette variable va récuper la forme integer de chaque lettre
    if(code[i] !== ' '){
      ascii = code.charCodeAt(i) + d
      if(ascii > 90)                                  // Voila le premier problème notre alphabet ascii va de 65 à 90 or si on depasse 90 il faudrat recompter à partir de 65
        decypher += String.fromCharCode(ascii - 26)   // donc on fait - 26 si cela dépasse :)
      else 
        decypher += String.fromCharCode(ascii)
    }
    else{
      decypher += ' '
    }
  }
  console.log(`Décalage de ${d}\n${decypher}\n`)      
}