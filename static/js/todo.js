// static/js/todo.js
document.getElementById('todoForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const data = {
        itemName: document.getElementById('itemName').value,
        itemDescription: document.getElementById('itemDescription').value
    };

    try {
        const res = await fetch('/submittodoitem', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        
        document.getElementById('response').textContent = 
            res.ok ? '✅ Item saved!' : '❌ Error: ' + result.error;
    } catch (err) {
        document.getElementById('response').textContent = '⚠️ Network error';
    }
});