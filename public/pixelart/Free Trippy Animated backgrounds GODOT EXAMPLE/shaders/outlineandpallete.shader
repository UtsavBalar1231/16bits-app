shader_type canvas_item;

uniform sampler2D palette_tex; //Palette to reference, this should be a 1-pixel tall texture containing your palette info
uniform vec4 outline_col : hint_color; //Outline color

void fragment() {
    
    //Get red value and sample palette based on it
    float pal_sample = texture(TEXTURE,UV).r;
    vec4 col = texture(palette_tex,vec2(pal_sample,0));
    
    //Get alpha val of adjacent pixels
    vec2 p = TEXTURE_PIXEL_SIZE;
    
    float a = texture(TEXTURE,UV+vec2(p.x,0)).a;
    a += texture(TEXTURE,UV+vec2(-p.x,0)).a;
    a += texture(TEXTURE,UV+vec2(0,p.y)).a;
    a += texture(TEXTURE,UV+vec2(0,-p.y)).a;
    
    //Using found alpha value, determine the opacity of the outline
    
    a = step(a,.5);//Clamp the a value
    col.rgb = mix(outline_col.xyz, col.rgb, col.a);
    col.a = step(a, col.a);
    
    //Get palette color
    COLOR = col;

}