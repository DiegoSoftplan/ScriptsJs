if (model.SolicitacaoNaoAreaContruida == 2 || model.SolicitacaoNaoAreaContruida == 3) {
    model.TipoAverbacao = [1];
    // Ajuste o tempo conforme necessário
    setTimeout(function() {
        var span = Array.from(document.querySelectorAll('span.ng-binding')).find(span => span.textContent.trim() === 'Construção');

        if (span) {
            var label = span.closest('label');
            
            if (label) {
                var checkbox = label.querySelector('input[type="checkbox"]');
                
                if (checkbox) {
                    checkbox.checked = true;
                    
                    var parentDiv = document.querySelector('div[key="TipoAverbacao"]');
                    
                    if (parentDiv) {
                        parentDiv.style.pointerEvents = 'none';
                        parentDiv.style.opacity = '0.5';
                    }
                }
            }
        }
    }, 100); // Ajuste o tempo conforme necessário
} else {
    model.TipoAverbacao = [];
    // Bloco else para desmarcar a caixa de seleção e habilitar o elemento
        var span = Array.from(document.querySelectorAll('span.ng-binding')).find(span => span.textContent.trim() === 'Construção');

        if (span) {
            var label = span.closest('label');
            
            if (label) {
                var checkbox = label.querySelector('input[type="checkbox"]');
                
                if (checkbox) {
                    checkbox.checked = false; // Desmarcar a caixa de seleção
                }
            }
        }

        var parentDiv = document.querySelector('div[key="TipoAverbacao"]');
        
        if (parentDiv) {
            parentDiv.style.pointerEvents = 'auto'; // Habilitar interação
            parentDiv.style.opacity = '1'; // Opacidade normal
        }
}