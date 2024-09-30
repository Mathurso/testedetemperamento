document.getElementById('start-part1').addEventListener('click', function() {
    document.getElementById('instructions').classList.add('hidden');
    document.getElementById('part1').classList.remove('hidden');
});

document.getElementById('submit-part1').addEventListener('click', function() {
    let scoreA = 0;
    const questions = document.querySelectorAll('#questions-part1 .question');
    questions.forEach((question) => {
        if (question.querySelector('input[type="radio"]:checked')) {
            if (question.querySelector('input[type="radio"]:checked').value === 'A') {
                scoreA++;
            }
        }
    });
 
    document.getElementById('part1').classList.add('hidden');
    document.getElementById('part2').classList.remove('hidden');
});

document.getElementById('submit-part2').addEventListener('click', function() {
    let scoreA = 0;
    const questions = document.querySelectorAll('#questions-part2 .question');
    questions.forEach((question) => {
        if (question.querySelector('input[type="radio"]:checked')) {
            if (question.querySelector('input[type="radio"]:checked').value === 'A') {
                scoreA++;
            }
        }
    });

    document.getElementById('part2').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');

    let temperament = '';
    const part1Result = scoreA > (questions.length / 2) ? 'A' : 'B';
    const part2Result = scoreA > (questions.length / 2) ? 'A' : 'B';

    if (part1Result === 'A' && part2Result === 'A') {
        temperament = 'Sanguíneo';
    } else if (part1Result === 'A' && part2Result === 'B') {
        temperament = 'Colérico';
    } else if (part1Result === 'B' && part2Result === 'A') {
        temperament = 'Fleumático';
    } else {
        temperament = 'Melancólico';
    }

    let description = '';
    switch (temperament) {
        case 'Sanguíneo':
            description = "Sanguíneo = Quente e Úmido<br>Extrovertido e envolvente, voltado para os relacionamentos interpessoais. É comunicativo, dinâmico e otimista. Suas emoções são intensas, mas as impressões são passageiras, o que faz com que mude de humor com bastante frequência e as expressões dessa mudança são muito intensas (quando está triste, está muito triste; quando feliz, muito feliz; quando com raiva, com muita raiva, etc). Não se apega ao passado e vive muito o presente, o que pode fazer com que busque prazeres instantâneos e momentâneos, por isso, precisa tomar cuidado com a superficialidade. Carismático, não falta assunto, faz amizades facilmente.";
            break;
        case 'Colérico':
            description = "Colérico = Quente e Seco<br>Muito prático, voltado para a execução e realização. Sua extroversão não é para relacionamentos, mas para a ação. Enérgico, determinado, com facilidade enorme para atingir metas e perseguir objetivos. Não se preocupa com o que pensam dele, o que importa é o que ele sabe sobre si. Cheio de opiniões e não tem medo de expô-las, considerado gênio forte. As impressões são duradouras nele e, por isso, as lembranças fazem com que ele reviva as emoções, tendo dificuldade em relevar. Gosta das coisas do seu jeito, por isso precisa cuidar para não ser controlador.";
            break;
        case 'Fleumático':
            description = "Fleumático = Frio e Úmido<br>Introvertido, diplomático e de fácil convivência. Pode não apreciar mudanças abruptas, mas consegue se adaptar facilmente a diferentes cenários com muita facilidade. Possui grande estabilidade emocional, dificilmente atingindo picos de humor muito distintos em um único dia. Transmite serenidade em seu jeito de ser, ainda que não se sinta assim por dentro. As impressões também são passageiras nele, mas não significa que sua memória seja curta. A fácil adaptação deve ser observada para que não se torne em estagnação e inércia.";
            break;
        case 'Melancólico':
            description = "Melancólico = Frio e Seco<br>Introvertido, reflexivo e profundo, muito cauteloso em suas ações e planejado. É emocionalmente sensível, sendo afetado pelas circunstâncias por um longo período. Gosta de estabilidade, previsibilidade, ordem e compromisso. A lealdade é um de seus pontos mais fortes, além do forte senso de dever e propósito. Leva a vida com seriedade e possui valores e princípios muito fortes. Não gosta de mudanças não planejadas e, quando acontecem, costuma sofrer até que assimile a mudança. É idealista e perfeccionista, que são qualidades que devem ser observadas, pois em excesso, causam medo de agir, que leva à procrastinação ou à desistência.";
            break;
    }
    
    document.getElementById('temperament-description').innerHTML = description;
});

document.getElementById('restart').addEventListener('click', function() {
    location.reload();
});
