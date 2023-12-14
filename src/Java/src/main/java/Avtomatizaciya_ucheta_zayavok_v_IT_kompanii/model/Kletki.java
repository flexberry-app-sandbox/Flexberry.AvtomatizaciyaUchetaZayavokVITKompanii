package Avtomatizaciya_ucheta_zayavok_v_IT_kompanii.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Avtomatizaciya_ucheta_zayavok_v_IT_kompanii.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Клетки
 */
@Entity(name = "IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiКлетки")
@Table(schema = "public", name = "Клетки")
public class Kletki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерКлетки")
    private Integer номерклетки;

    @Column(name = "ПлощатьКлетки")
    private Integer площатьклетки;

    @Column(name = "ТипКлетки")
    private String типклетки;


    public Kletki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерКлетки() {
      return номерклетки;
    }

    public void setНомерКлетки(Integer номерклетки) {
      this.номерклетки = номерклетки;
    }

    public Integer getПлощатьКлетки() {
      return площатьклетки;
    }

    public void setПлощатьКлетки(Integer площатьклетки) {
      this.площатьклетки = площатьклетки;
    }

    public String getТипКлетки() {
      return типклетки;
    }

    public void setТипКлетки(String типклетки) {
      this.типклетки = типклетки;
    }


}