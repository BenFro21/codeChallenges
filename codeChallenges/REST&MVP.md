# MVC
- M - Models: data(javascript vars)
- V - Views how the data is displayed to the user 
- C - Controllers: the glue that connects the models awith the views
# URI patterns 
- We want to build maintainable, scalable applications. To do that, we want to have a plan on how we name our URLs.
/photos/	    GET	    index
/photos/:id	    GET	    show
/photos/new	    GET	    new
/photos	        POST    create
/photos/:id/edit GET    edit
/photos/:id	    PATCH/PUT update
/photos/:id	    DELETE	destroy