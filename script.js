// ========== ENVELOPE OPENING FUNCTIONALITY ==========
// Get the envelope element
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const cardsContainer = document.getElementById('cardsContainer');

// Add click event to open envelope
envelope.addEventListener('click', function () {

    // Open envelope
    envelope.classList.add('open');

    // Card starts rising immediately
    cardsContainer.style.display = 'block';

    requestAnimationFrame(() => {
        cardsContainer.classList.add('show');
    });

    // Hide envelope after animation finishes
    setTimeout(() => {
        envelopeContainer.style.display = 'none';
    }, 600);
});

// ========== CARD NAVIGATION ==========
// Function to show a specific card and hide others
function showCard(id) {
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');
}

// ========== CLOSE INVITATION ==========
// Function to close the invitation and go back to envelope
function closeInvitation() {

    // Remove animation
    cardsContainer.classList.remove('show');

    setTimeout(() => {

        // Hide cards
        cardsContainer.style.display = 'none';

        // Show envelope again
        envelopeContainer.style.display = 'block';

        // Close envelope
        envelope.classList.remove('open');

    }, 600);
}

// ========== OPTIONAL: KEYBOARD NAVIGATION ==========
// Press 'Escape' to close the invitation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        // Only close if cards are visible
        if (cardsContainer.style.display !== 'none') {
            closeInvitation();
        }
    }
});

// ========== INITIALIZATION ==========
// Make sure the main card is active when envelope opens
// (This is set in the HTML, but we can confirm it here)
window.addEventListener('load', function() {
    console.log('Invitation website loaded! Click the envelope to begin.');
});

document.querySelectorAll('.page-link').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target = this.href;

        // Current page exits
        document.body.classList.add('fade-out-left');

        // Wait for animation
        setTimeout(() => {
            window.location.href = target;
        }, 500);
    });

});

// New page entrance animation
window.addEventListener('load', () => {

    document.body.classList.add('page-enter');

    requestAnimationFrame(() => {
        document.body.classList.add('page-enter-active');
    });

});
