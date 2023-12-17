package Kursovaya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: РегистрацВхода
 */
@Entity(name = "IISKursovayaРегистрацВхода")
@Table(schema = "public", name = "РегистрацВхода")
public class RegistracVxoda {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @OneToMany(mappedBy = "registracvxoda", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<VxodSotrudnika> vxodsotrudnikas;

    @OneToMany(mappedBy = "registracvxoda", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<VxodGostya> vxodgostyas;


    public RegistracVxoda() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}