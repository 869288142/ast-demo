$.ajax({
    url: './',
    type: 'get',
    data: {
        a: 1
    },
    success() {
        console.log('success');
        {
            a:1
        }
    },
    error(){
        console.log('error');
    }
})

// a.ajax({
//     url: './',
//     type: 'get',
//     data: {
//         a: 1
//     },
//     success() {
//         console.log('success');
//     },
//     error(){
//         console.log('error');
//     }
// })