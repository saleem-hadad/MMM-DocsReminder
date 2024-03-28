Module.register("MMM-DocsReminder", {
    start: function() {
        let self = this;
        self.updateDom();
        self.setHourlyInterval();
    },

    setHourlyInterval() {
        let hourInterval = 60 * 60 * 1000;
        setInterval(function() { self.updateDom(); }, hourInterval);
    },

    getDom: function() {
        let wrapper = document.createElement("div");
        wrapper.className = "tile";

        let today = new Date();
        let documents = this.sortBasedOnDueDates(this.config.documents);

        documents.forEach((doc) => {
            let dueDate = new Date(doc.dueDate);
            let daysLeft = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));

            let documentItem = document.createElement("div");
            documentItem.innerHTML = this.getInnterHtml(doc, daysLeft);
            documentItem.style = "margin-bottom: 5px";

            wrapper.appendChild(documentItem);
        });

        return wrapper;
    },

    sortBasedOnDueDates: function(documents) {
        return documents.sort(function(a, b) {
            return new Date(a.dueDate) - new Date(b.dueDate);
        });
    },

    getInnterHtml: function(doc, daysLeft) {
        if (daysLeft <= 0) {
            return `<i class="fas fa-exclamation-triangle text-red-500 pr-2"></i> ${doc.name} - Expired`;
        }
        if (daysLeft <= 30) {
            return `<i class="fas fa-exclamation-triangle text-red-500 pr-2"></i> ${doc.name} - ${daysLeft} day${daysLeft !== 1 ? 's' : ''} left (${doc.dueDate})`;
        }
        if (daysLeft <= 90) {
            return `<i class="fas fa-exclamation-triangle text-yellow-500 pr-2"></i> ${doc.name} - ${daysLeft} day${daysLeft !== 1 ? 's' : ''} left (${doc.dueDate})`;
        }
        
        return `<i class="fas fa-check text-green-500 pr-2"></i> ${doc.name} - ${daysLeft} day${daysLeft !== 1 ? 's' : ''} left (${doc.dueDate})`;
    },
});
