function validateForm(e){
    e.preventDefault()

    let name = document.getElementById('name').value
    let phone = document.getElementById ('phone').value
    let email = document.getElementById ('email').value
    let cname = document.getElementById ('cname').value
    let cage = document.getElementById ('cage').value
    let date = document.getElementById ('date').value
    let time = document.getElementById ('time').value
    let dura = document.getElementById ('dura').value
    let type = document.getElementById ('type').value
    let avail = document.getElementById ('avail').value


    let n_err = document.getElementById('n_err')
    let p_err = document.getElementById ('p_err')
    let e_err = document.getElementById ('e_err')
    let cn_err = document.getElementById ('cn_err')
    let ca_err = document.getElementById ('ca_err')
    let d_err = document.getElementById ('d_err')
    let tb_err = document.getElementById ('tb_err')
    let db_err = document.getElementById ('db_err')
    let t_err = document.getElementById ('t_err')
    let a_err = document.getElementById ('a_err')

    let suber = document.getElementById('suber')


    n_err.textContent = ''; 
    p_err.textContent = '';
    e_err.textContent = '';
    cn_err.textContent = '';
    ca_err.textContent = '';
    d_err.textContent = '';
    tb_err.textContent = '';
    db_err.textContent = '';
    t_err.textContent = '';
    a_err.textContent = '';

    let isValid = true
    let points = 0

    if(name === ''){
        n_err.textContent = "Input parent's name"
        isValid = false
    }else if(name.length < 3){
        n_err.textContent = "Parent's name must not be less than three"
        isValid = false
    }else{
        n_err.textContent = ''
        isValid = true
        points += 10
    }

    if(phone === ''){
        p_err.textContent = "Input parent's phone number"
        isValid = false
    }else if(phone.length < 11){
        p_err.textContent = 'This phone number does not exist'
        isValid = false
    }else{
        p_err.textContent = ''
        isValid = true
        points += 10

    }

    if(email === ''){
        e_err.textContent = 'Input parents email'
        isValid = false
    }else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.textContent(email)){
        e_err.textContent = 'Invalid email'
        isValid = false
    }else{
        e_err.textContent = ''
        isValid = true
        points += 10
    }

    if(cname === ''){
        cn_err.textContent = "Input Child's name"
        isValid = false
    }else if(name.length < 3){
        cn_err.textContent = "Child's name must not be less than three"
        isValid = false
    }else{
        cn_err.textContent = ''
        isValid = true
        points += 10
    }

    if(cage === ''){
        ca_err.textContent = "Input child's age"
        isValid = false
    }else{
        ca_err.textContent = ''
        isValid = true
        points += 10
    }

    if(date === ''){
        d_err.textContent = 'Select date of babysiting'
        isValid = false
    }else{
        d_err.textContent = ''
        isValid = true
        points += 10
    }

    if(time === ''){
        tb_err.textContent = 'Select time of babysiting'
        isValid = false
    }else{
        tb_err.textContent = ''
        isValid = true
        points += 10
    }

    if(dura === ''){
        db_err.textContent = 'Select duration of babysiting'
        isValid = false
    }else{
        db_err.textContent = ''
        isValid = true
        points += 10
    }

    if(type === ''){
        t_err.textContent = 'Choose type of service'
        isValid = false
    }else{
        t_err.textContent = ''
        isValid = true
        points += 10
    }

    if(avail === ''){
        a_err.textContent = 'Choose the sitter of you choice '
        isValid = false
    }else{
        a_err.textContent = ''
        isValid = true
        points += 10
    }

    if (isValid && points >= 100){
        suber.textContent = "The selected sitter should always try to be early to work, as the children are always up early. He must always know about the children's whereabouts and what they are doing at every point in time. Salary is $700"
        console.log(points)
    }else {
        suber.textContent = "Please try elsewhere"
    }


}