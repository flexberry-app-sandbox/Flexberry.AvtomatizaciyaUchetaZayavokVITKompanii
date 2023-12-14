package Avtomatizaciya_ucheta_zayavok_v_IT_kompanii.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Avtomatizaciya_ucheta_zayavok_v_IT_kompanii.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Сведения
 */
@Entity(name = "IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiСведения")
@Table(schema = "public", name = "Сведения")
public class Svedeniya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Код")
    private Integer код;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kletki")
    @Convert("Kletki")
    @Column(name = "Клетки", length = 16, unique = true, nullable = false)
    private UUID _kletkiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kletki", insertable = false, updatable = false)
    private Kletki kletki;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Korma")
    @Convert("Korma")
    @Column(name = "Корма", length = 16, unique = true, nullable = false)
    private UUID _kormaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Korma", insertable = false, updatable = false)
    private Korma korma;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Vid")
    @Convert("Vid")
    @Column(name = "Вид", length = 16, unique = true, nullable = false)
    private UUID _vidid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Vid", insertable = false, updatable = false)
    private Vid vid;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZHivotnye")
    @Convert("ZHivotnye")
    @Column(name = "Животные", length = 16, unique = true, nullable = false)
    private UUID _zhivotnyeid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZHivotnye", insertable = false, updatable = false)
    private ZHivotnye zhivotnye;


    public Svedeniya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКод() {
      return код;
    }

    public void setКод(Integer код) {
      this.код = код;
    }


}