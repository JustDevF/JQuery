//Le plug-in ajoute une infobulle explicative sur des liens.


/*Trois éléments doivent donc être paramétrés :
•	La classe qui prend en charge l’aspect de l’infobulle (options.infobullecss).
•	Le décalage vertical de l’infobulle par rapport au lien (options.offsetY).
•	Le décalage horizontal de l’infobulle par rapport au lien (options.offsetX). 
La fonction prend un array liste comténant les options citées.
*/

/** Utilisation
 * 
 * 
 */

(function($){ 
    jQuery.fn.mon_infobulle = function(options) { 
        //crée une division <div> (celle de l’infobulle)
        var element = document.createElement("div"); 
        //à laquelle il adjoint la classe de style infobullecss.
        $(element).addClass(options.infobullecss).hide(); 
        //Cette division est ajoutée au corps (body) du document.
        document.body.appendChild(element); 

        //retourner l'objet jQuery 
        return this.each(function() { 
            //Au survol du lien par le curseur de la souris
            $(this).hover(function() {
                //cette division est affichée
                $(element).show(); 
                //Le contenu de celle-ci reprend les éléments de l’attribut rel du lien
                $(element).html($(this).attr("rel")); 
                //Il est prudent de prévoir un léger décalage horizontal et vertical de l’infobulle par rapport au lien (left et top).
                $(this).mousemove(function(e) { 
                    $(element).css({ 
                        "position": "absolute", 
                        "top": e.pageY + options.offsetY, 
                        "left": e.pageX + options.offsetX 
                    }); 
                }); 
            }, function() { 
            $(element).hide() 
            }); 
        }); 
    }; 
})(jQuery)
