list = ["https://img.freepik.com/fotos-gratis/feliz-bonito-mulher-jovem-posar-camera-em-parque-cidade_1262-19158.jpg", 
    "https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-linda-modelo-de-pe-e-sorrindo-para-a-camera-foto-de-alta-qualidade_144627-75055.jpg", 
    "https://i.pinimg.com/236x/00/db/79/00db791a08ad8157b634ea6440c1f596.jpg", 
    "https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Rozman_2023_interview_with_Lazavik.jpg/220px-Rozman_2023_interview_with_Lazavik.jpg"
]

textlist = ["Josimarilda Cristóvão Colombo", 
    "Katrina Joséia", 
    "meu tio avó de quinto grau ou sexto", 
    "DOGUINHOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO", 
    "Enxadrista Profissional Americano e Criador de Conteúdo Focado na Plataforma Youtube."
]
i = 0
function next(){
    if (i < 4){
        i++
    } else {
        i = 0
    }
    document.getElementById("imgId").src = list[i]
    document.getElementById("Id").innerHTML = textlist[i]
}