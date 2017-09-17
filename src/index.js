/* ДЗ 6.1 - Асинхронность и работа с сетью */

/**
 * Функция должна создавать Promise, который должен быть resolved через seconds секунду после создания
 *
 * @param {number} seconds - количество секунд, через которое Promise должен быть resolved
 * @return {Promise}
 */
function delayPromise(seconds) {

    return new Promise(function(resolve) {
        setTimeout(function() {
            return resolve();
        }, seconds * 1000);
    })
}

/**
 * Функция должна вернуть Promise, который должен быть разрешен массивом городов, загруженным из
 * https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
 * Элементы полученного массива должны быть отсортированы по имени города
 *
 * @return {Promise<Array<{name: String}>>}
 */
function loadAndSortTowns() {
    
    return new Promise(function (resolve, reject) {
        var url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';
        var xhr = new XMLHttpRequest();
        
        xhr.open('GET', url);
        xhr.addEventListener('load', function () {
            var cities = JSON.parse(xhr.responseText);

            function compare(a, b, i) {
                i = i || 0;

                if (a.name.charAt(i) < b.name.charAt(i)) {
                    return -1;
                } else if (a.name.charAt(i) > b.name.charAt(i)) {
                    return 1;
                }

                return compare(a, b, ++i);
            }
            resolve(cities.sort(compare));
        });

        xhr.addEventListener('error', function() {
            reject(error);
        });

        xhr.send();
    });
}

export {
    delayPromise,
    loadAndSortTowns
};
