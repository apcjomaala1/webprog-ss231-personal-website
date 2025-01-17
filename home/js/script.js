function displayMessage() {
    alert("Hello, welcome to my personal profile page!");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const mode = document.body.classList.contains("dark-mode") ? "Dark Mode" : "Light Mode";
}

const { createApp } = Vue;

createApp({
    data() {
        return {
            images: [
                { src: './cat.jpg', alt: 'Cat' },
                { src: './cat_2.jpg', alt: 'Cat 2' },
            ],
        };
    },
    methods: {
        scrollLeft() {
            this.$refs.gallery.scrollBy({ left: -300, behavior: 'smooth' });
        },
        scrollRight() {
            this.$refs.gallery.scrollBy({ left: 300, behavior: 'smooth' });
        },
    },
}).mount('#app');

createApp({
    data() {
        return {
            showSurvey: false, // Controls visibility of the survey overlay
            surveyData: {
                name: '',
                email: '',
                feedback: '',
            },
        };
    },
    methods: {
        submitSurvey() {
            alert(`Survey Submitted!\nName: ${this.surveyData.name}\nEmail: ${this.surveyData.email}\nFeedback: ${this.surveyData.feedback}`);
            this.showSurvey = false; // Close the survey after submission
            this.surveyData = { name: '', email: '', feedback: '' }; // Reset form
        },
    },
}).mount('#app2');
