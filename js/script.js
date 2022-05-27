
//Função para alterar a borda
function borda(){


//Alterações de borda
  document.getElementById("bloco").style.border = ("solid " + (document.getElementById("id_tamanho").value) + "px " + (document.getElementById("id_cor").value)); 
  document.getElementById("bloco").style.borderStyle = (document.getElementById("id_estilo").value);
  document.getElementById("bloco").style.borderRadius = (document.getElementById("id_radius").value + "px");
  document.getElementById("bloco").style.borderTopLeftRadius = (document.getElementById("id_radius_topleft").value + "px")
  document.getElementById("bloco").style.borderTopRightRadius = (document.getElementById("id_radius_topright").value + "px")
  document.getElementById("bloco").style.borderBottomLeftRadius = (document.getElementById("id_radius_bottomleft").value + "px")
  document.getElementById("bloco").style.borderBottomRightRadius = (document.getElementById("id_radius_bottomright").value + "px")

  //retorno dos códigos CSS
  document.getElementById("resultado_border").innerHTML = ("border: " + document.getElementById("bloco").style.border + ";");
  document.getElementById("resultado_radius").innerHTML = ("border-radius: " + document.getElementById("bloco").style.borderRadius + ";");
}