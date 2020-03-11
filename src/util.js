export default {
    formatCurrency: function (num) {
        return 'KGZ' + Number(num.toFixed(1)).toLocaleString() + ' ';
    }
}