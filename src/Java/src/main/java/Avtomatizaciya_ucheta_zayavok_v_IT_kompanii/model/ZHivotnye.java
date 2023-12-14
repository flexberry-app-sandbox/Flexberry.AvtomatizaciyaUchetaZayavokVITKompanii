package Avtomatizaciya_ucheta_zayavok_v_IT_kompanii.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Avtomatizaciya_ucheta_zayavok_v_IT_kompanii.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: Животные
 */
@Entity(name = "IISAvtomatizaciya_ucheta_zayavok_v_IT_kompaniiЖивотные")
@Table(schema = "public", name = "Животные")
public class ZHivotnye {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерЖивотного")
    private Integer номерживотного;

    @Column(name = "КодВида")
    private Integer кодвида;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;

    @OneToMany(mappedBy = "zhivotnye", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Svedeniya> svedeniyas;


    public ZHivotnye() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерЖивотного() {
      return номерживотного;
    }

    public void setНомерЖивотного(Integer номерживотного) {
      this.номерживотного = номерживотного;
    }

    public Integer getКодВида() {
      return кодвида;
    }

    public void setКодВида(Integer кодвида) {
      this.кодвида = кодвида;
    }


}