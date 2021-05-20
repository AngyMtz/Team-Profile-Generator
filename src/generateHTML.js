const icons = employeeType => {
    
    if (employeeType === "Manager")
        return '<i class="fas fa-mug-hot"></i>'
    
    else if (employeeType === "Engineer")
        return '<i class="fas fa-glasses"></i>'
    
    else if (employeeType === "Intern")
        return '<i class="fas fa-user-graduate"></i>'
} 

const mainHTML = data => 
        
    `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">

            <link rel="stylesheet" href="../src/style.css">
            
            <title>Team Profile</title>           
        </head>
                
        <body>            
                    
            <div class="container">

                <header>
                    <h1>Employee Profile</h1>
                </header>

                <div class="row">
                        
                    ${data}
    
                </div>
            </div>
                        
        </body>
    </html>`;
                
    
    
const engineerboard = employee => 

`<div class="card"> 

    <div class="card-header"> 

        <h4>${employee.name}</h4> 
        ${icons(employee.getRole())}<h5>${employee.getRole()}</h5> 

    </div> 

    <div class="card-body">  

        <p class="id">ID: ${employee.id}</p>
        <p class="email">Email: <a href="mailto: ${employee.email}">${employee.email}</a></p> 
        <p class="github">Github:<a href="${employee.github}" target="_blank">${employee.github}</a></p> 

    </div>  

</div>`;
           
const internboard = employee => 

    `<div class="card"> 

    <div class="card-header"> 
        
        <h4>${employee.name}</h4>         
        ${icons(employee.getRole())}<h5>${employee.getRole()}</h5> 
        
    </div> 
        
    <div class="card-body">  
        
        <p class="id">ID: ${employee.id}</p>        
        <p class="email">Email: <a href="mailto: ${employee.email}">${employee.email}</a></p>        
        <p class="school">School: ${employee.school}</p> 
        
    </div>  
        
</div>`;
            
const managerboard = employee => 

    `<div class="card"> 

    <div class="card-header"> 
        
        <h4>${employee.name}</h4>        
        ${icons(employee.getRole())}<h5>${employee.getRole()}</h5> 
        
    </div> 
        
    <div class="card-body">  
        
        <p class="id">ID: ${employee.id}</p>        
        <p class="email">Email: <a href="mailto:${employee.email}">${employee.email}</a></p>        
        <p class="school">Office Number: ${employee.officeNumber}</p> 
        
    </div>  
        
</div>`;
            
 

// export to index
module.exports = {engineerboard, internboard, managerboard, mainHTML};