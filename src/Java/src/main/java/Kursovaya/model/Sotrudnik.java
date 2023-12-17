package Kursovaya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Сотрудник
 */
@Entity(name = "IISKursovayaСотрудник")
@Table(schema = "public", name = "Сотрудник")
public class Sotrudnik {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "Телефон")
    private Integer телефон;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Karta")
    @Convert("Karta")
    @Column(name = "Карта", length = 16, unique = true, nullable = false)
    private UUID _kartaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Karta", insertable = false, updatable = false)
    private Karta karta;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dolzhnosti")
    @Convert("Dolzhnosti")
    @Column(name = "Должности", length = 16, unique = true, nullable = false)
    private UUID _dolzhnostiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dolzhnosti", insertable = false, updatable = false)
    private Dolzhnosti dolzhnosti;


    public Sotrudnik() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public Integer getТелефон() {
      return телефон;
    }

    public void setТелефон(Integer телефон) {
      this.телефон = телефон;
    }


}