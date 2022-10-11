const loaderMixin = {
    // Начало
    methods: {
        setLoading(isLoad) {
            if (isLoad){
                const animationLoad = document.createElement('div')
                animationLoad.classList.add('loader')
                document.querySelector('.btn--finish-loading').append(animationLoad)
            } else {
                document.querySelector('.btn--finish-loading').removeChild(document.querySelector('.loader'))
            }
        },
    }
    // Конец
};

module.exports = loaderMixin;
