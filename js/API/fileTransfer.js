//file-Transfer
var transfer = {
        imgSuccess: function (r) {
            if( r.response==1){
            $.mobile.loading('hide');
            navigator.notification.alert('El registro de los datos ha sido un éxito',function(){
            window.location.href = '#home';
            }, 'Registro','Aceptar');
        }
       
        },
        imgError: function (error) {
        alert("An error has occurred: Code = " + error.code);
        },
        imgUpload: function(img){
            var options = new FileUploadOptions();
            options.fileKey = "foto";
            options.fileName = "ilse";
            options.mimeType = "image/jpeg";
            
            var ft = new fileTransfer();
            ft.upload(img, server.url, transfer.imgSuccess, transfer.imgError,options);
            
                        
        }
    
        
        
};



