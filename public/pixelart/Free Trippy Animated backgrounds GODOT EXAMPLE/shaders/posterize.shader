shader_type canvas_item;
render_mode unshaded;

uniform bool enabled = true;
uniform sampler2D gradient: hint_black;
uniform vec3 greyscale = vec3(0.299, 0.587, 0.114);

void fragment() {
	vec4 input_color = texture(TEXTURE, UV);
	if (enabled) {
		float greyscale_value = dot(input_color.rgb, greyscale);
		vec3 sampled_color = texture(gradient, vec2(greyscale_value, 0.0)).rgb;
		COLOR = vec4(sampled_color, input_color.a);
	} else {
		COLOR = input_color;
	}
}