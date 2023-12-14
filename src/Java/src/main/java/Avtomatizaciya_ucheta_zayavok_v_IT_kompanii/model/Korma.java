package Avtomatizaciya_ucheta_zayavok_v_IT_kompanii.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Avtomatizaciya_ucheta_zayavok_v_IT_kompanii.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Корма
 */
@Entity(name = "IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiКорма")
@Table(schema = "public", name = "Корма")
public class Korma {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ТипКорма")
    private String типкорма;

    @Column(name = "НомерЖивотного")
    private Integer номерживотного;


    public Korma() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getТипКорма() {
      return типкорма;
    }

    public void setТипКорма(String типкорма) {
      this.типкорма = типкорма;
    }

    public Integer getНомерЖивотного() {
      return номерживотного;
    }

    public void setНомерЖивотного(Integer номерживотного) {
      this.номерживотного = номерживотного;
    }


}