function handleAnswer(selected, correct) {
    if (locked) return;
    locked = true;

    // Si el modo es "Español -> Turco", suena el turco al clicar (es la solución)
    if (currentRoundMode === 'es-tr') hablarTurco(current.word);

    const isCorrect = (selected === correct);
    const wordKey = current.word;

    document.querySelectorAll(".option").forEach(b => {
        if (b.textContent === correct) b.style.backgroundColor = "#10b981";
        if (b.textContent === selected && !isCorrect) b.style.backgroundColor = "#ef4444";
    });

    if (isCorrect) {
        // Al acertar en modo "Turco -> Español", Emel repite la palabra como confirmación
        if (currentRoundMode === 'tr-es') hablarTurco(current.word);
        
        progress[wordKey] = (progress[wordKey] || 0) + 1;
        if (progress[wordKey] >= MASTERY_THRESHOLD) {
            score++;
            activeQueue = activeQueue.filter(w => w.word !== wordKey);
        }
    } else {
        // Al fallar en modo "Turco -> Español", también suena para que asocies el sonido a la corrección
        if (currentRoundMode === 'tr-es') hablarTurco(current.word);
        
        if (progress[wordKey] > 0) progress[wordKey]--;
    }

    updateStats();
    renderDots(wordKey);
    setTimeout(loadQuestion, 1250);
}
