import java.util.regex.Pattern;
import java.util.LinkedHashMap;
import java.util.Map;

class SqueakyClean {
    static String clean(String identifier) {
        LinkedHashMap<String,String> leet = new LinkedHashMap(
            Map.of("-(\\D)","UPPER","4","a","3","e","0","o","1","l","7","t","\\s","_","\\W","")
        );
        for (Map.Entry<String, String> entry : leet.entrySet()) {
            //identifier = identifier.replaceAll(entry.getKey(), entry.getValue()); 
            identifier = Pattern.compile(entry.getKey()).matcher(identifier).replaceAll(rep -> { 
                    return entry.getValue() == "UPPER" ? rep.group(1).toUpperCase() : entry.getValue();
                });
        }
        return identifier;
    }
}
